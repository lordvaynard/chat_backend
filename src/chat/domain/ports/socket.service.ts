import { Logger } from "@nestjs/common"
import {
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'http';


@WebSocketGateway({
    cors: {
        origin: '*', //liberando CORS - NÃO FAZER EM PRODUCAO
    }
})

export class SocketService
implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('Socket');

    notifyNewMessage(contact: string, content: string) {
        const obj = { contact, content}
        this.server.emit('new_message, obj');
    }

    handleDisconnect(client: any) {
        this.logger.debug(`Client disconneted: ${client.id}`);
    }
    handleConnection(client: any, ...args: any[]) {
        this.logger.debug(`Client conneted: ${client.id}`);
    }
    afterInit() {
        this.logger.debug(`Init`);
    }
}