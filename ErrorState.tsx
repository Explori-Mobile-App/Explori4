import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

export function ErrorState({ 
  title = 'Something went wrong',
  message = 'We encountered an error. Please try again.',
  onRetry,
  showRetry = true
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center" data-bravo="[container]">
      <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="font-medium text-[#1f2937] mb-2" data-bravo="[text]">{title}</h3>
      <p className="text-[#64748b] mb-6 max-w-sm" data-bravo="[text]">{message}</p>
      {showRetry && (
        <Button 
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
          data-bravo="[button]"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
      )}
    </div>
  );
}

export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorState
      title="Connection Error"
      message="Please check your internet connection and try again."
      onRetry={onRetry}
    />
  );
}