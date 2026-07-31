import Breadcrumbs from '@/components/common/Breadcrumbs'

const PageHeader = ({
	title,
	actions,
	description,
	breadcrumbs,
}) => {
	return (
		<header className='mb-8 gap-4 flex items-start justify-between'>
			<div>
				<Breadcrumbs items={breadcrumbs} />

				<h1 className='text-3xl font-bold tracking-tight'>
					{ title }
				</h1>

				{
					description && (
						<p className='mt-2 text-muted-foreground'>
							{ description }
						</p>
				)}
			</div>

			{
				actions && (
					<div className='gap-2 flex items-center'>
						{ actions }
					</div>
			)}
		</header>
	)
}

export default PageHeader