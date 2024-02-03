import React from 'react';
import Link from 'next/link';

const TopNav = () => {
  return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
      <Link className="nav-link" href="/">
        🛒 Bapple
      </Link>

      <div className="d-flex">

        <Link href="/login" className="nav-link"> Login</Link>

        <Link href="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  )
}

export default TopNav