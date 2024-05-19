<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Snaprr extends Model
{
    protected $table = 'snaprr';
    public $timestamps = false;
    protected $primaryKey = 'snaprrID';

    protected $fillable = [
        'snaprrID',
        'username',
        'password',
        'email',

        
        ];
}
