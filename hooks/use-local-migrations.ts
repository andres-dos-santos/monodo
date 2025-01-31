import {} from 'drizzle-orm'

export function useLocalMigration() {
	const migrationData = useMigrations(db, migrations)
}
