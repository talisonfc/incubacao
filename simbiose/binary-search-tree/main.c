#include <stdio.h>
#include <stdlib.h>

struct Node{
	int data;
	struct Node* left;
	struct Node* right;
} typedef Node;

int checkBST(Node*  no){
	
	return 0;
}

Node* createNo(){
	Node* novo = (Node*)malloc(sizeof(Node));
	node->left = NULL;
	node->right = NULL;
	return novo;
}



void printNo(Node* no){
	printf("\n%d", no->data);
	printf("\n%d", (int)no->left);
	printf("\n%d\n", (int)no->right);
}

int main(int argc, char *argv[]) {
	Node *no = createNo();

	no->data = 3;

	printNo(no);

	free(no);
	printf("OKOKO\n");
	return 0;
}