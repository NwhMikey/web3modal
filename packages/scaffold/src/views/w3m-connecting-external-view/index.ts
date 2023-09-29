import type { BaseError, ConnectorType, Platform } from '@web3modal/core'
import { ConnectionController, EventsController, ModalController } from '@web3modal/core'
import { customElement } from 'lit/decorators.js'
import { W3mConnectingWidget } from '../../utils/w3m-connecting-widget/index.js'

const platformMap = {
  INJECTED: 'injected',
  EIP6963: 'injected'
} as Record<ConnectorType, Platform>

@customElement('w3m-connecting-external-view')
export class W3mConnectingExternalView extends W3mConnectingWidget {
  public constructor() {
    super()
    if (!this.connector) {
      throw new Error('w3m-connecting-view: No connector provided')
    }
    EventsController.sendEvent({
      type: 'track',
      event: 'SELECT_WALLET',
      properties: {
        name: this.connector.name ?? 'Unknown',
        platform: platformMap[this.connector.type] ?? 'external'
      }
    })
    this.onConnect = this.onConnectProxy.bind(this)
    this.onAutoConnect = this.onConnectProxy.bind(this)
    this.isWalletConnect = false
  }

  // -- Private ------------------------------------------- //
  private async onConnectProxy() {
    try {
      this.error = false
      if (this.connector) {
        await ConnectionController.connectExternal(this.connector)
        ModalController.close()
      }
    } catch (error) {
      EventsController.sendEvent({
        type: 'track',
        event: 'CONNECT_ERROR',
        properties: { message: (error as BaseError)?.message ?? 'Unknown' }
      })
      this.error = true
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-connecting-external-view': W3mConnectingExternalView
  }
}
