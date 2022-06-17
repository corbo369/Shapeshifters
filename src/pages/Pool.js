import MainPool from '../MainPool';

export default function Pool({ accounts, setAccounts }) {

    return (
        <div>
            <MainPool accounts={accounts} setAccounts={setAccounts} />
        </div>
    );
}