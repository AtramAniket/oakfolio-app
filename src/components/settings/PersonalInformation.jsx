import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from '@/components/ui/card'

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar'

import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AVATARS } from '@/constants/avatars'
import { Lock, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import authService from '@/services/authService'
import AvatarSelector from '@/components/settings/AvatarSelector'



const PersonalInformation = () => {
  const { user, refreshUser } = useAuth()

  const [username, setUsername] = useState(user?.username ?? '')

  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    if (user?.avatar_id) {
      return user.avatar_id
    }

    const randomIndex = Math.floor(
      Math.random() * AVATARS.length
    )

    return AVATARS[randomIndex].id
  })

  useEffect(() => {
    if (!user) return

    setUsername(user.username ?? '')

    if (user.avatar_id) {
      setSelectedAvatar(user.avatar_id)
    }
  }, [user])

  const handleSave = async () => {
    
    try{
      const payload = {
        username: username,
        avatar_id: selectedAvatar,
      }

      const response = await authService.updateUser(payload)

      console.log(response?.message)

      await refreshUser()
    }
    catch(error){
      console.error(error)
    }
  }

  const selectedAvatarData = AVATARS.find(
    (avatar) => avatar.id === selectedAvatar
  )

  const avatarFallback = username
    ? username.charAt(0).toUpperCase()
    : 'U'

  return (
    <Card className='overflow-hidden p-0'>
      <CardHeader className='border-b bg-muted/50 px-6 py-4'>
        <div className='flex items-center gap-3'>
          <UserRound className='h-7 w-7' />

          <div>
            <CardTitle>Personal Information</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Manage your profile information.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-8 pt-6'>

        {/* Profile preview */}
        <div className='flex items-center gap-4'>
          <Avatar className='h-16 w-16'>
            <AvatarImage
              src={selectedAvatarData?.src}
              alt={selectedAvatarData?.id}
            />

            <AvatarFallback className='text-lg'>
              {avatarFallback}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className='font-medium'>
              {user?.username}
            </p>

            <p className='text-sm text-muted-foreground'>
              {user?.email}
            </p>
          </div>
        </div>

        {/* Avatar selector */}
        <AvatarSelector
          selectedAvatar={selectedAvatar}
          onSelect={setSelectedAvatar}
        />

        {/* Account fields */}
        <div className='grid gap-6 md:grid-cols-2'>

          {/* Email */}
          <div className='space-y-2'>
            <Label htmlFor='email'>
              Email
            </Label>

            <div className='relative'>
              <Input
                id='email'
                value={user?.email ?? ''}
                readOnly
                disabled
                className='pr-10'
              />

              <Lock className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            </div>

            <p className='text-xs text-muted-foreground'>
              Your email address cannot be changed.
            </p>
          </div>

          {/* Username */}
          <div className='space-y-2'>
            <Label htmlFor='username'>
              Username
            </Label>

            <Input
              id='username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Enter your username'
            />
          </div>

        </div>

        {/* Save */}
        <div className='flex justify-end'>
          <Button onClick={handleSave}>
            Save changes
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

export default PersonalInformation