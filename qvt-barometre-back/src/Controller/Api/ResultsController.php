<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ResultsController extends AbstractController
{
    #[Route('/api/results', name: 'api_results', methods: ['GET'])]
    public function getResults(): JsonResponse
    {
        return $this->json([
            'labels' => ['Q1', 'Q2', 'Q3', 'Q4'],
            'values' => [12, 34, 56, 78]
        ]);
    }
}
