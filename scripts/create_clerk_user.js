async function createUser() {
  const response = await fetch('https://api.clerk.com/v1/users', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer sk_test_PewhoW2JdL9V6Nsrq5qpx89b6ts4UK5Zgg0lOUHPvR',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email_address: ['admin@alpinist.com'],
      password: 'alpinist2026',
      first_name: 'Admin',
      last_name: 'User',
      skip_password_checks: true
    })
  });

  const data = await response.json();
  if (response.ok) {
    console.log('User created successfully:', data.id);
  } else {
    console.error('Failed to create user:', data);
  }
}

createUser();
