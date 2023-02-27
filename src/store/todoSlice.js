import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		isShowAddTodo: false,
		todos: [
			{
				id: 1,
				title: "title1",
				body: "body1",
				isCompleted: true,
				tags: [
					{
						id: 1,
						title: "work",
						isActive: false,
						color: "#D2CEFF",
					},
					{
						id: 2,
						title: "study",
						isActive: false,
						color: "#D1E5F7",
					},
					{
						id: 3,
						title: "entertainment",
						isActive: false,
						color: "#FFCECE",
					},
					{
						id: 4,
						title: "family",
						isActive: true,
						color: "#DAF2D6",
					},
				],
			},
			{
				id: 2,
				title: "title2",
				body: "body2",
				isCompleted: false,
				tags: [
					{
						id: 1,
						title: "work",
						isActive: true,
						color: "#D2CEFF",
					},
					{
						id: 2,
						title: "study",
						isActive: false,
						color: "#D1E5F7",
					},
					{
						id: 3,
						title: "entertainment",
						isActive: false,
						color: "#FFCECE",
					},
					{
						id: 4,
						title: "family",
						isActive: false,
						color: "#DAF2D6",
					},
				],
			},
		],
		filters: {
			tags: [
				{
					id: 1,
					title: "work",
					isActive: false,
					color: "#D2CEFF",
				},
				{
					id: 2,
					title: "study",
					isActive: false,
					color: "#D1E5F7",
				},
				{
					id: 3,
					title: "entertainment",
					isActive: false,
					color: "#FFCECE",
				},
				{
					id: 4,
					title: "family",
					isActive: false,
					color: "#DAF2D6",
				},
			],
			isHideCompleted: false,
		},
		tags: [
			{
				id: 1,
				title: "work",
				isActive: false,
				color: "#D2CEFF",
			},
			{
				id: 2,
				title: "study",
				isActive: false,
				color: "#D1E5F7",
			},
			{
				id: 3,
				title: "entertainment",
				isActive: false,
				color: "#FFCECE",
			},
			{
				id: 4,
				title: "family",
				isActive: false,
				color: "#DAF2D6",
			},
		],
	},
	reducers: {
		setIsShowAddTodo(state, action) {
			state.isShowAddTodo = action.payload.isShowAddTodo;
		},
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
		},
		changeTodo(state, action){
			const todo = state.todos.find(todo => todo.id === action.payload.id);
			todo.title = action.payload.title;
			todo.body = action.payload.body;
			todo.tags = action.payload.tags;
		},
		toggleCompletedTodo(state, action) {
			const todo = state.todos.find(todo => todo.id === action.payload.id);
			todo.isCompleted = !todo.isCompleted;
		},
		toggleIsActiveTag(state, action) {
			const tag = state.filters.tags.find(tag => tag.id === action.payload.id);
			tag.isActive = !tag.isActive;
		},
		toggleIsShowCompleted(state) {
			state.filters.isHideCompleted = !state.filters.isHideCompleted;
		},
	},
});

export const {setIsShowAddTodo, addTodo, removeTodo, changeTodo, toggleCompletedTodo, toggleIsActiveTag, toggleIsShowCompleted} = todoSlice.actions;

export default todoSlice.reducer;