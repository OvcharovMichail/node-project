export function errorHandler(err: { stack: any; }, req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; message: string; }): void; new(): any; }; }; }, next: any){
     console.error(err.stack);
      res.status(500).json({
      status: "error",
      message: "Something went wrong!"
     });
}