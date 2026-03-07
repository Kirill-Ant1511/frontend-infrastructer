module.exports ={
    // Используем 2 пробела для отступов
    tabWidth: 4,
    // Используем одинарные кавычки для строк
    singleQuote: true,
    // Добавляем точку с запятой в конце каждой строки
    semi: true,
    // Используем одинарные кавычки для JSX атрибутов
    jsxSingleQuote: true,
    // Добавляем пробелы между скобками в объектах, массивах и функциях
    bracketSpacing: true,
    overrides : [
        {
            files : ['*.json'],
            options : {
                semi : true,
                tabWidth : 2
            }
        }
    ]
}