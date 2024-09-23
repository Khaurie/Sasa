"use client"; // This is necessary for client-side interactions

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Sasa Pet Shop</h1>
      <p style={styles.text}>
        Please log in to manage your account or explore the shop.
      </p>
      <div style={styles.buttonGroup}>
        {/* Corrected: No <a> inside <Link> */}
        <Link href="/login" style={styles.button}>
          Login
        </Link>
        <Link href="/register"style={styles.button}>Register</Link>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '600px',
    color: '#555',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  },
};
