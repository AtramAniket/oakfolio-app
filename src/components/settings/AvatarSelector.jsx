import { Check } from 'lucide-react'
import { AVATARS } from '@/constants/avatars'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'


const AvatarSelector = ({ selectedAvatar, onSelect }) => {
	return (
		<div className='space-y-3'>
			<p className='text-sm font-medium'>
				Choose Your Avatar
			</p>

			<div className='flex flex-wrap gap-3'>
				{
					AVATARS.map((avatar)=>{

						const isSelected = selectedAvatar == avatar.id

						return(
							<button
								type='button'
								key={avatar.id}
								onClick={() => onSelect(avatar.id)}
								aria-label={
								isSelected
									? `Selected ${avatar.id}`
									: `Select ${avatar.id}`
								}
								className='relative rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
							>
								<Avatar
									className={`h-14 w-14 border-2  transition-all ${
										isSelected
											? 'border-primary ring-2 ring-primary/20'
											: 'border-transparent hover:border-muted-foreground/30'
									}`}
								>
									<AvatarImage
										src={avatar.src}
										alt={avatar.id}
									/>
									<AvatarFallback>
										{avatar.fallback}
									</AvatarFallback>
								</Avatar>	
								{
									isSelected &&(
										<span className='absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground'>
											<Check className='h-3 w-3' />
										</span>
									)
								}
							</button>
						)

					})
				}
			</div>
		</div>
	)
}

export default AvatarSelector