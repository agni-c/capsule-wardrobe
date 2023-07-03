import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';

function fallbackRender({ error, resetErrorBoundary }) {
	// Call resetErrorBoundary() to reset the error boundary and retry the render.
	console.error(error.stack);
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ErrorBoundary
			fallbackRender={fallbackRender}
			onReset={details => {
				// Reset the state of your app so the error doesn't happen again
			}}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
