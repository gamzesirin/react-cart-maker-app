import './Card.css'

import { Button, Card, Group, Image, Text } from '@mantine/core'

function CardComponent({ title, par }) {
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder className="Card">
			<Card.Section>
				<Image
					src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
					height={160}
					alt="Norway"
				/>
			</Card.Section>

			<Group position="apart" mt="md" mb="xs">
				<Text weight={500}>{title}</Text>
			</Group>

			<Text size="sm" color="dimmed">
				{par}
			</Text>

			<Button
				variant="light"
				color="blue"
				fullWidth
				mt="md"
				radius="md"
				onClick={(e) => {
					e.target.parentElement.parentElement.parentElement.remove()
				}}
			>
				Delete Card
			</Button>
		</Card>
	)
}

export default CardComponent
