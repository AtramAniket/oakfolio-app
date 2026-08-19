import PageHeader from '@/components/common/PageHeader'
import DangerZone from '@/components/settings/DangerZone'
import SecuritySettings from '@/components/settings/SecuritySettings'
import ActivitySettings from '@/components/settings/ActivitySettings'
import PersonalInformation from '@/components/settings/PersonalInformation'
import NotificationSettings from '@/components/settings/NotificationSettings'

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Profile & Settings
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage your account, preferences, and security.
        </p>
      </div>

      <PersonalInformation />

      <NotificationSettings />

      <SecuritySettings />

      <ActivitySettings />

      <DangerZone />
    </div>
  )
}

export default SettingsPage