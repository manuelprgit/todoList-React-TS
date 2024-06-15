type Todo = {
    id: number;
    description: string;
    completed: boolean;

}

let listOfTodos:Todo[] = [
    {
        id: 1,
        description: 'Comprar alimentos para la semana',
        completed: false
    },
    {
        id: 2,
        description: 'Llevar el coche al taller para una revisión',
        completed: false
    },
    {
        id: 3,
        description: 'Hacer una cita para el dentista',
        completed: true
    },
    {
        id: 4,
        description: 'Limpiar la cocina',
        completed: false
    },
    {
        id: 5,
        description: 'Pagar las facturas del mes',
        completed: true
    },
    {
        id: 6,
        description: 'Hacer ejercicio por 30 minutos',
        completed: false
    },
    {
        id: 7,
        description: 'Llamar a mamá',
        completed: true
    },
    {
        id: 8,
        description: 'Ordenar el garaje',
        completed: true
    },
    {
        id: 9,
        description: 'Estudiar para el examen de mañana',
        completed: true
    },
    {
        id: 10,
        description: 'Regar las plantas',
        completed: false
    }
];

export { listOfTodos }