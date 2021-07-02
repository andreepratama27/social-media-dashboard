import React, { createContext, useReducer } from 'react'
import { Post } from 'types'

type State = {
	allPost: Post[],
	post: Post | null
}

const initialState: State = {
	allPost: [],
	post: null
}

enum ActionType {
	INIT_POST = 'INIT_POST',
	INIT_SINGLE_POST = 'INIT_SINGLE_POST'
}

type Action = {
	type: ActionType,
	payload: any
}

export const AppContext = createContext<{ state: State, dispatch: React.Dispatch<any>}>({
	state: initialState,
	dispatch: () => null
})

const appReducer = (state:State, action: Action): State => {
	const { type, payload } = action

	switch (type) {
		case ActionType.INIT_POST: {
			return {
				...state,
				allPost: payload
			}
		}

		case ActionType.INIT_SINGLE_POST: {
			return {
				...state,
				post: payload
			}
		}

		default: {
			return state
		}
	}
}

const AppContextWrapper: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState)

	return (
		<AppContext.Provider value={{ state, dispatch}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextWrapper