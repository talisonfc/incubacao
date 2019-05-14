import {Injectable} from '@angular/core'
import {Socket} from 'ng-socket-io'

@Injectable()
export class MonitorService{
    
    constructor(private socket: Socket){}

    sendMessage(msg: string){
        this.socket.emit("valor", msg)
    }

    getMenssage(){
        return this.socket.fromEvent("valor")
    }
}