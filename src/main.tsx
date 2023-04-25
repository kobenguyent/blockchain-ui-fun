import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createHashRouter, RouterProvider} from "react-router-dom"
import {CreateTransactionForm} from "./Components/CreateTransactionForm.tsx";
import {apiHelper} from "./helpers/api.ts";
import {PendingTransactionList} from "./Components/PendingTransaction.tsx";

if (!localStorage.getItem('walletId')) {
    apiHelper.post('/wallet/create').then((response) => {
        localStorage.setItem('walletId', response.data.walletAddress)
    });
}

const pendingTxList = (await apiHelper.get('/transaction/pendingList')).data

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: 'createTransaction',
        element: <CreateTransactionForm walletAddress={localStorage.getItem('walletId')}></CreateTransactionForm>
    },
    {
        path: 'pendingTransaction',
        element: <PendingTransactionList pendingTxList={pendingTxList} rewardWalletId={localStorage.getItem('walletId')}></PendingTransactionList>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
