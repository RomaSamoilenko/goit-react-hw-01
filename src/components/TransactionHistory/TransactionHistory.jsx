import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead className={css.theadContainer}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbodyContainer}>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.text}>{transaction.type}</td>
            <td className={css.text}>{transaction.amount}</td>
            <td className={css.text}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;