import { Injectable } from '@nestjs/common';
import { isValidationOptions, registerDecorator, ValidationArguments, ValidatorConstraintInterface, ValidatorOptions } from 'class-validator';
import { getConnection } from 'typeorm';

@Injectable()
export class ExistValidator implements ValidatorConstraintInterface{
    async validate(value:any, args:ValidationArguments){
        let find = {[args.constraints[1]] : args.value}
        let cek = await getConnection().getRepository(args.constraints[0]).findOne(find)
        if(cek) return false
        return true
    }
    defaultMessage(args:ValidationArguments){
        return args.property + '' + args.value + 'sudah digunakan'
    }
}

export function IsExist(option:any,isValidationOption:ValidatorOptions){
    return function (object:any, propertyName:string){
      registerDecorator({
          name : 'IsExist',
          target : object.constructor,
          propertyName : propertyName,
          constraints : option,
          options : isValidationOption,
          validator : ExistValidator,
          async : true
      })  
    }
}