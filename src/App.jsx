import AppRouter from '@/routes/AppRouter'
import AuthProvider from '@/contexts/AuthProvider'
import { TooltipProvider } from '@/components/ui/tooltip'

function App() {
  return (
    <TooltipProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </TooltipProvider>
  );
}

export default App;
