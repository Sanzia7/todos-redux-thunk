export const selectTodos = ({ todos }) => todos

export const selectSearchInput = ({ options }) => options.searchInput

export const selectSearchText = ({ options }) => options.searchText

export const selectIsSortingAZ = ({ options }) => options.isSortingAZ

export const selectIsLoading = ({ options }) => options.isLoading;

export const selectEditingTodoId = ({ editingTodo }) => editingTodo.id;

export const selectEditingTodoTitle = ({ editingTodo }) => editingTodo.title;
