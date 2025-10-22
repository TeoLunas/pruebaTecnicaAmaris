export class ResponseData<T> {
    constructor(
        public exitoso: boolean,
        public descripcion: string,
        public resultado: T | null, // <-- aquí el cambio
        public error: boolean,
        public code: number
    ) { }

    static success<T>(
        resultado: T,
        descripcion = 'Operación exitosa',
        code = 200
    ): ResponseData<T> {
        return new ResponseData(true, descripcion, resultado, false, code);
    }

    static fail<T>(
        descripcion = 'Error en la operación',
        code = 500
    ): ResponseData<T | null> {
        return new ResponseData(false, descripcion, null, true, code);
    }
}
