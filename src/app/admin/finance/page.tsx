import { DollarSign, TrendingUp, TrendingDown, Users, ArrowUpRight, ArrowDownRight, CreditCard, Clock } from 'lucide-react';

export default function FinanceDashboardPage() {
  const transactions: { id: string, user: string, plan: string, amount: number, status: string, date: string }[] = [];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#dcfce7', padding: '12px', borderRadius: '12px', color: '#16a34a' }}>
          <DollarSign size={28} />
        </div>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Finance & Subscriptions</h1>
          <p style={{ color: '#64748b' }}>Manage your Stripe revenue, MRR, and recent transactions.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.875rem' }}>Monthly Recurring Revenue</span>
            <TrendingUp size={20} color="#16a34a" />
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>$0</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#16a34a', fontSize: '0.875rem', fontWeight: 600 }}>
            <ArrowUpRight size={16} /> 0% from last month
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.875rem' }}>Active Subscribers</span>
            <Users size={20} color="#3b82f6" />
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>0</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#16a34a', fontSize: '0.875rem', fontWeight: 600 }}>
            <ArrowUpRight size={16} /> 0 new this week
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.875rem' }}>Churn Rate</span>
            <TrendingDown size={20} color="#ef4444" />
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>0.0%</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600 }}>
            No churn data yet
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CreditCard size={20} color="#64748b" /> Recent Transactions
          </h2>
          <button style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>View All in Stripe</button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', textAlign: 'left', fontSize: '0.875rem' }}>
                <th style={{ padding: '1rem' }}>Transaction ID</th>
                <th style={{ padding: '1rem' }}>User</th>
                <th style={{ padding: '1rem' }}>Plan</th>
                <th style={{ padding: '1rem' }}>Amount</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                    No recent transactions found.
                  </td>
                </tr>
              ) : (
                transactions.map((tx, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#0f172a' }}>{tx.id}</td>
                    <td style={{ padding: '1rem', color: '#64748b' }}>{tx.user}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ backgroundColor: '#eff6ff', color: '#3b82f6', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>{tx.plan}</span>
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>${tx.amount.toFixed(2)}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: tx.status === 'Success' ? '#16a34a' : '#ef4444', fontWeight: 600, fontSize: '0.875rem' }}>
                        {tx.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={14} /> {tx.date}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
