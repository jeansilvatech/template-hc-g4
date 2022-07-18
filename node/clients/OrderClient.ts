import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class OrderClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://bitsized.vtexcommercestable.com.br', context, options)
  }

  public async getOrder(orderId: string): Promise<string> {
    return this.http.get(`/api/oms/pvt/orders/${orderId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'VtexIdclientAutCookie': 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjYxQUI2RUU1MENCRjZFMTk3NkU4MDA0NzlCMDUyRERGQ0QxRTFGQzMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJkYW5pbG9sYW50dW5lc0Bob3RtYWlsLmNvbSIsImFjY291bnQiOiJiaXRzaXplZCIsImF1ZGllbmNlIjoiYWRtaW4iLCJzZXNzIjoiN2QyNDAyNjctNGQ5ZS00YjkxLTllMWEtN2U0ZjRmYTAzN2M1IiwiZXhwIjoxNjU4MTU1MzAxLCJ1c2VySWQiOiI3MjNhMzk4OS03MzhiLTQwZmEtOWQ5NS1jYzc2Njg4ODk4NjEiLCJpYXQiOjE2NTgwNjg5MDEsImlzcyI6InRva2VuLWVtaXR0ZXIiLCJqdGkiOiI0MmEwYTlhOC1hNTlhLTQxYjEtOWY4MS1lN2IyYzNjNjBjMzkifQ.zROX7On8T4LDDvBg0bjKW1X4FOjasNFrawF0944jVvY4IjxuDMjzl0h27LwwJ1kZgw213gfTwAqnKCOZpywIOA'
      }
    })
  }
}
