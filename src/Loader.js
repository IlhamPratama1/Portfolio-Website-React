import React, { Suspense } from 'react';
import LoadingPage from './views/loading/loadingPage';

export default function Loader() {
    const App = React.lazy(() => import('./App'));

    return(
        <div>
            <Suspense fallback={<LoadingPage />}>
                <App />
            </Suspense>
        </div>
    );
}