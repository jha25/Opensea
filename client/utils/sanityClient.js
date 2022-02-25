import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5qbj3bn0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skKusSa6DZVCK5r1s1PEKWL8GP6XQDo7HUHzBwwdOUAspeMQsHVnKQaPUn0UorHvCCYgKq9IhtbAqiN2XV4ybvTwW7de8F9Kg3PlPpuo49Gh4FBR0OLaq4tN8pr3tC0OcQKF6loSU28QruGWkYBLQmz68snqHnuI8lptYSKxVzfhKd4kFuvi',
  useCdn: false,
})
