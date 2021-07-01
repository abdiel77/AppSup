import { Component, OnInit } from '@angular/core';

import { DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-economics',
  templateUrl: './economics.page.html',
  styleUrls: ['./economics.page.scss'],
})
export class EconomicsPage implements OnInit {
  

  constructor(private document: DocumentViewer) { }

  ngOnInit() {
  }
  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    
    this.document.viewDocument('assets/Economics%20SP.pdf', 'application/pdf', options)
  }

}
