<?php

namespace App\Controller\Api;

use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class QuestionController extends AbstractController
{
    #[Route('/api/questions', name: 'api_questions', methods: ['GET'])]
    public function getQuestions(QuestionRepository $repo): JsonResponse
    {
        $questions = $repo->findBy([], ['sortOrder' => 'ASC']); 

        $data = array_map(function($q) {
            return [
                'id' => $q->getId(),
                'text' => $q->getText(),
                'type' => $q->getType(),
                
                'options' => $q->getOptions(),
                'sortOrder' => $q->getSortOrder()
            ];
        }, $questions);

        return $this->json($data);
    }
}
