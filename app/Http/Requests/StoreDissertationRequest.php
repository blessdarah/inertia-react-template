<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class StoreDissertationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        // return $this->user()->can('create', Dissertation::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "school_id" => 'required',
            "department_id" => 'required',
            "abstract" => 'required|string',
            "title" => 'required|string',
            "author" => 'required|string',
            "supervisor" => 'required|string',
            "cover_page" => 'required|image|max:500',
            "file" => [ 'required',
                        File::types(['pdf'])
                            ->min(1024)
                            ->max(5 * 1024)
                    ]
        ];
    }


    public function messages()
    {
        return [
            'school_id.required' => "School is required",
            'department_id.required' => "Department is required"
        ];
    }
}
