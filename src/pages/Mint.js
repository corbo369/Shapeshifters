import MainMint from '../MainMint';

export default function Mint({ accounts, setAccounts }) {

    return (
        <div>
            <MainMint accounts={accounts} setAccounts={setAccounts} />
        </div>
    );
}