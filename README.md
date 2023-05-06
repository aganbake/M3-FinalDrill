## Code By:

- **Kevin Villarroel**

## Final Drill M3

#Se solicita generar una aplicación para administrar presupuesto

## Funciones

# add

Inicialmente se tiene una variable que almacenara el presupuesto del usuario
luego se verifica el valor que hay en los gastos y en el saldo, esto por si se actualiza el presupuesto
Se elimina el $

Verifica si el gasto y el saldo está vacio y los define como $0

si el saldo es mayor a $0 (si se actualiza el presupuesto) entonces actualiza el saldo, restando el gasto al presupuesto

si ya hay presupuesto, permite ingresar gastos (para evitar errores)

# Expense

Se crea la variable expense para almacenar el concepto y expenseAmount para almacenar el monto, solo para estar seguro se pasa a Int

pero si se detecta que está vació o no es un número, no permite ingresar nada

En caso de que se cumpla el monto del gasto, crea un elemento TR para ingresar a la tabla, con el detalle del gasto, además de un botón para eliminar luego

llama a la función update además ajusta un circulo para tener una visual del presupuesto

# Update

Acá simplemente tomamos el presupuesto y del gasto total, al total gastado le sumamos el monto del gasto y cambiamos el presupuesto final o saldo y se actualiza en el front

# Revert

Acá lo que hacemos es verificar el saldo, quitarle el $ y actualizar el gasto total quitando ese monto que se quiere eliminar (para aumentar el valor del saldo)

además actualiza la visual haciendola crecer

# DeleteItem

Encontré que era más sencillo crear una función que me elimine la fila, en lugar de pasear un for, ya que al no tener que crear manual cada una de las filas, simplemente elimino esa y actualizo el monto del saldo

## Recursos

- [Boostrap 5.2]
- [Jquery]
- [San Google]

## Repositorio

https://github.com/aganbake/M3-FinalDrill.git
