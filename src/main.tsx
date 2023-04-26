import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createHashRouter, RouterProvider} from "react-router-dom"
import {CreateTransactionForm} from "./Components/CreateTransactionForm.tsx";
import {apiHelper} from "./helpers/api.ts";
import {PendingTransactionList} from "./Components/PendingTransaction.tsx";

const pendingTxList = (await apiHelper.get('/transaction/pendingList')).data
const walletId = (await apiHelper.post('/wallet/create')).data.walletAddress

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: 'createTransaction',
        element: <CreateTransactionForm walletAddress={walletId}></CreateTransactionForm>
    },
    {
        path: 'pendingTransaction',
        element: <PendingTransactionList pendingTxList={pendingTxList} rewardWalletId={walletId}></PendingTransactionList>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
