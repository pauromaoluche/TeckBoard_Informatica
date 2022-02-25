<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('service')->length(500);
            $table->string('name')->length(100);
            $table->string('email')->length(100);
            $table->string('type')->length(10);
            $table->string('phone')->length(20);
            $table->integer('state')->length(2);
            $table->string('city')->length(100);
            $table->string('street')->length(5);
            $table->integer('number')->length(100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
