'use client'

import {  FlowActions, FlowNodeTypes, FlowSingleCardTypes } from '@/lib/types'
import {
  Dispatch,
  createContext,
  useContext,
  useReducer,
} from 'react'
import {
  ReactFlowInstance,
} from "@xyflow/react";

export type EditorNode = FlowNodeTypes

export type Editor = {
  elements: EditorNode[]
  edges: {
    id: string
    source: string
    target: string
  }[]
  selectedNode: EditorNode
  instance: ReactFlowInstance | null
}

export type HistoryState = {
  history: Editor[]
  currentIndex: number
}

export type EditorState = {
  editor: Editor
  history: HistoryState
}

const initialEditorState: EditorState['editor'] = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: '',
      metadata: {},
      title: '',
      type: 'JourneyStep',
    } as FlowSingleCardTypes,
    id: '',
    position: { x: 0, y: 0 },
    type: 'JourneyStep',
  } as EditorNode,
  edges: [],
  instance: null
}

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
}

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
}

const editorReducer = (
  state: EditorState = initialState,
  action: FlowActions
): EditorState => {
  switch (action.type) {
    case 'REDO':
      if (state.history.currentIndex < state.history.history.length - 1) {
        const nextIndex = state.history.currentIndex + 1
        const nextEditorState = { ...state.history.history[nextIndex] }
        const redoState = {
          ...state,
          editor: nextEditorState,
          history: {
            ...state.history,
            currentIndex: nextIndex,
          },
        }
        return redoState
      }
      return state

    case 'UNDO':
      if (state.history.currentIndex > 0) {
        const prevIndex = state.history.currentIndex - 1
        const prevEditorState = { ...state.history.history[prevIndex] }
        const undoState = {
          ...state,
          editor: prevEditorState,
          history: {
            ...state.history,
            currentIndex: prevIndex,
          },
        }
        return undoState
      }
      return state

    case 'LOAD_DATA':
      return {
        ...state,
        editor: {
          ...state.editor,
          elements: action.payload.elements || initialEditorState.elements,
          edges: action.payload.edges,
          instance:action.payload.instance
        },
      }
    case 'SELECTED_ELEMENT':
      return {
        ...state,
        editor: {
          ...state.editor,
          selectedNode: action.payload.element,
        },
      }
    default:
      return state
  }
}

export type EditorContextData = {
  previewMode: boolean
  setPreviewMode: (previewMode: boolean) => void
}

export const EditorContext = createContext<{
  state: EditorState
  dispatch: Dispatch<FlowActions>
}>({
  state: initialState,
  dispatch: () => undefined,
})

type EditorProps = {
  children: React.ReactNode
}

const EditorProvider = (props: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState)

  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  )
}

export const useEditor = () => {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditor Hook must be used within the editor Provider')
  }
  return context
}

export default EditorProvider
