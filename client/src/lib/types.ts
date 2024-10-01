


import {
  type ReactFlowInstance,
} from "@xyflow/react";
export const initialNodes: FlowNodeTypes[] = [];

export const initialEdges: { id: string; source: string; target: string }[] = [];

  //-----------------------------
  export type FlowNodeOptionTypes =
  | 'JourneyStep'
  | 'WebsiteVisitors'
  | 'TriggerNode'
  export type FlowSingleCardTypes = {
    title: string
    description: string
    completed: boolean
    current: boolean
    metadata: any
    type: FlowNodeOptionTypes
    selected:boolean
  }
  export type FlowNodeTypes = {
    id: string
    type: FlowSingleCardTypes['type']
    position: {
      x: number
      y: number
    }
    data: FlowSingleCardTypes
  }

  export type FlowActions =
  | {
      type: 'LOAD_DATA'
      payload: {
        elements: FlowNodeTypes[]
        edges: {
          id: string
          source: string
          target: string
        }[]
        instance: ReactFlowInstance | null
      }
    }
  | {
      type: 'UPDATE_NODE'
      payload: {
        elements: FlowNodeTypes[]
      }
    }
  | { type: 'REDO' }
  | { type: 'UNDO' }
  | {
      type: 'SELECTED_ELEMENT'
      payload: {
        element: FlowNodeTypes
      }
    }
  //----------------------------



