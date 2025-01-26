import dayjs from 'dayjs'
import { Text, View } from 'react-native'
import { Todo } from './todo'
import { s } from '@/utils/s'

interface Props {
	day: string
}

const _todos = [
	{ content: 'Planejar a semana', done: true, id: 1 },
	{ content: 'Praticar exercícios físicos', done: false, id: 2 },
	{ content: 'Aprender algo novo', done: false, id: 3 },
	// { content: 'Organizar o ambiente de trabalho', done: false, id: 4 },
	// { content: 'Avançar no projeto atual', done: false, id: 5 },
]

export function Todos({ day }: Props) {
	if (day !== dayjs().subtract(3, 'day').format('YYYY-MM-DD')) {
		return null
	}

	return (
		<View style={s`gap-2`}>
			{_todos.map((todo) => (
				<Todo key={`todo-${todo.id}`} {...todo} />
			))}
		</View>
	)
}
