import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {CreateTransactionForm} from "./Components/CreateTransactionForm.tsx";
import {apiHelper} from "./helpers/api.ts";
import {PendingTransactionList} from "./Components/PendingTransaction.tsx";

if (!localStorage.getItem('walletId')) {
    apiHelper.post('/wallet/create').then((response) => {
        localStorage.setItem('walletId', response.data.walletAddress)
    });
}

const pendingTxList = (await apiHelper.get('/transaction/pendingList')).data

const router = createBrowserRouter([
    {
        path: "blockchain-ui-fun/",
        element: <App />,
    },
    {
        path: 'blockchain-ui-fun/createTransaction',
        element: <CreateTransactionForm walletAddress={localStorage.getItem('walletId')}></CreateTransactionForm>
    },
    {
        path: 'blockchain-ui-fun/pendingTransaction',
        element: <PendingTransactionList pendingTxList={pendingTxList} rewardWalletId={localStorage.getItem('walletId')}></PendingTransactionList>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
