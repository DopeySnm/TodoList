export const TodoActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            let valueToSave = value;
            if (!value) {
                valueToSave = [];
            }
            localStorage.setItem('todoList', JSON.stringify(valueToSave));
            resolve();
        })
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('todoList');
            if (!savedValue) {
                resolve([])
            } else
                resolve(JSON.parse(savedValue));
        })
    }
}