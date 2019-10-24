package com.vilniurun.reactspringdemo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectException extends RuntimeException{

    public ProjectException(String message) {
        super(message);
    }
}
