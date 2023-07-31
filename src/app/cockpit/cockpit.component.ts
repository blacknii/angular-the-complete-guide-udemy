import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    ServerComponent: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    serverName: string;
    ServerComponent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  onAddServer(ServerNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: ServerNameInput.value,
      ServerComponent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(ServerContentInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: ServerContentInput.value,
      ServerComponent: this.serverContentInput.nativeElement.value,
    });
  }
}
