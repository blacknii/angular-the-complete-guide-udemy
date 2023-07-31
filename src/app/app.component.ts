import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'test', content: 'testing' }];

  onServerAdded(serverData: { serverName: string; ServerComponent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.ServerComponent,
    });
  }

  onAddBlueprintAdded(blueprintData: {
    serverName: string;
    ServerComponent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.ServerComponent,
    });
  }
}
