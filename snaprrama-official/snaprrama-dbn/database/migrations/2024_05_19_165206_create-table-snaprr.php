<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('snaprr', function (Blueprint $table) {
            $table->id('snaprrID');
            $table->string('username', 255);
            $table->string('password', 255);
            $table->string('email', 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('snaprr', function (Blueprint $table) {
            //
        });
    }
};
