<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $this->faker = \Faker\Factory::create('pt_BR');
        return [
            'name' => $this->faker->name(),
            'tel' => $this->faker->phoneNumber(),
            'cpf' => $this->faker->cpf(false),
            'email' => $this->faker->unique()->safeEmail(),
            'budge' => $this->faker->randomNumber(4),
            'address' => $this->faker->address(),
            'organization' => $this->faker->domainName(),
            'role' => $this->faker->randomElement(['student', 'teacher', 'admin']),
            'email_verified' => true,
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
