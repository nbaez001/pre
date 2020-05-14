import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { ValidationService } from 'src/app/core/services/validation.service';
import { DatePipe } from '@angular/common';
import { UbigeoService } from '../../services/ubigeo.service';
import { ApiOutResponse } from '../../dto/response/ApiOutReponse';
import { InscripcionRequest } from '../../dto/request/InscripcionRequest';
import { ProvinciaRequest } from '../../dto/request/ProvinciaRequest';
import { DistritoRequest } from '../../dto/request/DistritoRequest';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  inscripcion: InscripcionRequest;
  formularioGrp: FormGroup;

  listaDepartamento: any[];
  listaProvincia: any[];
  listaDistrito: any[];

  messages = {
    'dni': {
      'required': 'El campo es obligatorio',
      'maxlength': 'Cantidad maximo de digitos es 8'
    },
    'nombre': {
      'required': 'El campo es obligatorio'
    },
    'apellidoPat': {
      'required': 'El campo es obligatorio'
    },
    'apellidoMat': {
      'required': 'El campo es obligatorio'
    },
    'celular': {
      'required': 'El campo es obligatorio',
      'maxlength': 'Cantidad maximo de digitos es 11'
    },
    'email': {
      'required': 'El campo es obligatorio',
      'email': 'Ingrese un email valido'
    },
    'direccion': {
      'required': 'El campo es obligatorio'
    },
    'departamento': {
      'required': 'El campo es obligatorio'
    },
    'provincia': {
      'required': 'El campo es obligatorio'
    },
    'distrito': {
      'required': 'El campo es obligatorio'
    },
    'fechaInscripcion': {
      'required': 'El campo es obligatorio'
    }
  };
  formErrors = {
    'dni': '',
    'nombre': '',
    'apellidoPat': '',
    'apellidoMat': '',
    'celular': '',
    'email': '',
    'direccion': '',
    'departamento': '',
    'provincia': '',
    'distrito': '',
    'fechaInscripcion': '',
  };

  constructor(private fb: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private _snackbar: MatSnackBar,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    @Inject(RegistroService) private registroService: RegistroService,
    @Inject(UbigeoService) private ubigeoService: UbigeoService,
    @Inject(ValidationService) private validationService: ValidationService,
  ) { }

  ngOnInit() {
    this.spinner.hide();
    this.formularioGrp = this.fb.group({
      dni: ['', [Validators.required, Validators.maxLength(8)]],
      nombre: ['', [Validators.required, Validators.maxLength(8)]],
      apellidoPat: ['', [Validators.required]],
      apellidoMat: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      distrito: ['', [Validators.required]],
      fechaInscripcion: [{ value: '', disabled: true }, [Validators.required]],
    });

    this.formularioGrp.get('fechaInscripcion').setValue(new Date(this.datePipe.transform(new Date(), 'MM/dd/yyyy')));
    console.log(this.formularioGrp.get('fechaInscripcion').value);

    this.formularioGrp.valueChanges.subscribe(val => {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, false);
    });

    this.inicializarVariables();
  }

  inicializarVariables(): void {
    this.comboDepartamento();
  }

  comboDepartamento(): void {
    this.ubigeoService.listarDepartamento().subscribe(
      (data: ApiOutResponse) => {
        console.log(data);
        if (data.rCodigo === 1) {
          this.listaDepartamento = data.result;
          this.listaDepartamento.unshift({ id: 0, nombre: 'NO DEFINIDO' });
          this.formularioGrp.get('departamento').setValue(this.listaDepartamento[0]);

          this.comboProvincia();
        } else {
          this.listaDepartamento = [];
          this.listaDepartamento.unshift({ id: 0, nombre: 'NO DEFINIDO' });
          this.formularioGrp.get('departamento').setValue(this.listaDepartamento[0]);

          this.comboProvincia();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  comboProvincia(): void {
    let req: ProvinciaRequest = { idDepartamento: this.formularioGrp.get('departamento').value.id };

    this.ubigeoService.listarProvincia(req).subscribe(
      (data: ApiOutResponse) => {
        if (data.rCodigo == 1) {
          this.listaProvincia = data.result;
          this.listaProvincia.unshift({ id: 0, nombre: 'NO DEFINIDO' });
          this.formularioGrp.get('provincia').setValue(this.listaProvincia[0]);

          this.comboDistrito();
        } else {
          this.listaProvincia = [];
          this.listaProvincia.unshift({ id: 0, nombre: 'NO DEFINIDO' });
          this.formularioGrp.get('provincia').setValue(this.listaProvincia[0]);

          this.comboDistrito();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  comboDistrito(): void {
    let req: DistritoRequest = { idProvincia: this.formularioGrp.get('provincia').value.id };

    this.ubigeoService.listarDistrito(req).subscribe(
      (data: ApiOutResponse) => {
        if (data.rCodigo == 1) {
          this.listaDistrito = data.result;
          this.listaDistrito.unshift({ id: 0, nombre: 'NO DEFINIDO' });
          this.formularioGrp.get('distrito').setValue(this.listaDistrito[0]);
        } else {
          this.listaDistrito = [];
          this.listaDistrito.unshift({ id: 0, nombre: 'NO DEFINIDO' });
          this.formularioGrp.get('distrito').setValue(this.listaDistrito[0]);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  registrar() {
    if (this.formularioGrp.valid) {
      this.spinner.show();
      this.inscripcion = {
        id: 0,
        dni: this.formularioGrp.get('dni').value,
        nombre: this.formularioGrp.get('nombre').value,
        apellidoPat: this.formularioGrp.get('apellidoPat').value,
        apellidoMat: this.formularioGrp.get('apellidoMat').value,
        celular: this.formularioGrp.get('celular').value,
        email: this.formularioGrp.get('email').value,
        direccion: this.formularioGrp.get('direccion').value,
        idDepartamento: this.formularioGrp.get('departamento').value.id,
        idProvincia: this.formularioGrp.get('provincia').value.id,
        idDistrito: this.formularioGrp.get('distrito').value.id,
        fechaInscripcion: this.formularioGrp.get('fechaInscripcion').value,
        nomDepartamento: this.formularioGrp.get('departamento').value.nombre,
        nomProvincia: this.formularioGrp.get('provincia').value.nombre,
        nomDistrito: this.formularioGrp.get('distrito').value.nombre,
      };

      console.log(this.inscripcion);
      this.registroService.registrarInscripcion(this.inscripcion).subscribe(
        (data: ApiOutResponse) => {
          console.log(data);
          // this._snackbar.open('Ocurrio un error durante la inscripcion, vuelva a intentar mas tarde', null, { duration: 7000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['error-snackbar'] });
          if (data.rCodigo == 1) {
            this.spinner.hide();
            const dialogRef = this.dialog.open(ConfirmacionComponent, {
              width: '450px',
              data: { title: 'CONFIRMACION DE INSCRIPCION', objeto: this.inscripcion }
            });
            dialogRef.afterClosed().subscribe(result => {
              this.validationService.setAsUntoched(this.formularioGrp, this.formErrors, ['departamento', 'provincia', 'distrito', 'fechaInscripcion']);
            });
          } else {
            this.spinner.hide();
            this._snackbar.open('Ocurrio un error durante la inscripcion, vuelva a intentar mas tarde', null, { duration: 7000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['error-snackbar'] });
          }
        }, error => {
          this.spinner.hide();
          console.log(error);
          this._snackbar.open('Ocurrio un error durante la inscripcion, vuelva a intentar mas tarde', null, { duration: 7000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['error-snackbar'] });
        }
      );
    } else {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
    }
  }

  buscar(): void {

  }

}
