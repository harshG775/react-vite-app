// Reducer_db.jsx
export const Actions = {
	TOGGLE_MENU: "toggle_menu",
    LOGIN: "login",
	LOGOUT: "logout",
};
export default function Reducer_db(state, { actionType, payload }) {
	switch (actionType) {
		case Actions.TOGGLE_MENU: {
			return {
				...state,
				isOpen: payload,
			};
		}
		case Actions.LOGIN: {
			localStorage.setItem("user", payload);
			return {
				...state,
				user: JSON.parse(payload),
			};
		}
		case Actions.LOGOUT: {
			localStorage.setItem("user", payload);
			return {
				...state,
				user: payload,
			};
		}

		// default:
		//   throw new Error();

		default:
			return state;
	}
}
