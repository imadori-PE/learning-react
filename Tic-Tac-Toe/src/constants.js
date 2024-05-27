/*La declaración export se utiliza en JavaScript para exportar valores desde un módulo. 
Los valores exportados pueden luego ser importados en otros programas utilizando la 
sentencia import o importación dinámica. 
Esta funcionalidad es fundamental para trabajar con módulos en JavaScript */
export const TURNS = {
    X: 'X',
    O: 'O'
};

export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/* Exportación con nombre:
Se utiliza para exportar funciones, objetos o tipos de dato primitivos del módulo.
Puedes exportar múltiples valores con nombres diferentes.
Durante la importación, debes usar el mismo nombre que el objeto correspondiente */